import { useParams } from 'react-router-dom';
import { getServiceById, getAllServices } from '../data/services';
import ServiceDetails from '../components/ServiceDetails';
import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';

const ServiceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Log all available services for debugging
  useEffect(() => {
    console.log('All available services:', getAllServices().map(s => s.id));
    console.log('Current service ID from URL:', id);
  }, [id]);
  
  // Normalize the ID to handle any URL encoding
  const normalizedId = id?.toLowerCase().trim();
  const service = getServiceById(normalizedId || '');
  
  // Log the service data
  console.log('Found service with ID:', normalizedId, 'Service data:', service);

  if (!service) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
            <p className="text-white/70 mb-4">The service you're looking for doesn't exist or has been removed.</p>
            <div className="bg-gray-800 p-4 rounded-lg inline-block text-left">
              <p className="text-yellow-400">Requested ID: {id}</p>
              <p className="text-gray-400 text-sm mt-2">Available services:</p>
              <ul className="list-disc list-inside text-left">
                {getAllServices().map(s => (
                  <li key={s.id} className="text-blue-400">
                    {s.id} - {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }


  return <ServiceDetails service={service} />;
};

export default ServiceDetailsPage;
