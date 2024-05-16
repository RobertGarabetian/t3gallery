const mockUrls = [
  "https://utfs.io/f/33cea0f0-9beb-4a0f-a885-9ffd164a98f7-1p8rzw.png",
  "https://utfs.io/f/e30ed6a4-512d-470e-b93f-632ade579fd1-jo3ox0.png",
  "https://utfs.io/f/dada04cb-e683-45f6-b8e9-3b308864260d-z7dpqd.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-60">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
