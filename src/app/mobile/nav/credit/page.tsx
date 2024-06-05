export default function MobileHome() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-start gap-2 p-5">
      <h1 className="text-center text-2xl font-bold">
        Asset used in this project
      </h1>

      <ul className="list-decimal">
        <li>
          <a
            target="_blank"
            className="underline"
            href="https://www.freepik.com/free-vector/back-school-background-with-kids_2496999.htm#fromView=search&page=1&position=30&uuid=f9924c2d-db11-4ef2-a5ba-0f4818d9c09f"
          >
            Rank page Image by freepik
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="underline"
            href="https://bocchidaily.tumblr.com/post/750613943620337664"
          >
            trashcan racoon
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="underline"
            href="https://safebooru.org//images/4619/17289fb65697ec3adda05131d44dfdf150095533.png?4814699"
          >
            mobile profile placeholder
          </a>
        </li>
      </ul>
    </main>
  );
}
