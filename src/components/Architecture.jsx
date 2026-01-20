export default function Architecture() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">System Architecture</h2>

        <p className="text-gray-700">
          The application follows a microservices architecture with an API
          Gateway handling routing and security. Each service is independently
          deployable and communicates using REST APIs.
        </p>
      </div>
    </section>
  );
}
