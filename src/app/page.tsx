import { db } from "~/server/db";
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/dada04cb-e683-45f6-b8e9-3b308864260d-z7dpqd.png",
  "https://utfs.io/f/dada04cb-e683-45f6-b8e9-3b308864260d-z7dpqd.png",
  "https://utfs.io/f/dada04cb-e683-45f6-b8e9-3b308864260d-z7dpqd.png",
  "https://utfs.io/f/dada04cb-e683-45f6-b8e9-3b308864260d-z7dpqd.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-60">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
