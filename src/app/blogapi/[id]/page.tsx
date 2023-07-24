export default function UserPosts({ params }: { params: { id: string } }) {
    return (
        <div>My Post: { params.id }</div>
    );
}