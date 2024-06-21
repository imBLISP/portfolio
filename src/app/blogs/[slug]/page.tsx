export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Blog: {params.slug}</div>
}