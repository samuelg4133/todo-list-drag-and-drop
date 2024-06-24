import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const getErrorMessage = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return error.statusText;
  }

  return JSON.stringify(error);
};

const getErrorStatus = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return error.status;
  }

  return 500;
};

export default function ErrorPage() {
  const error = useRouteError();

  console.error(isRouteErrorResponse(error));

  return (
    <main className="grid h-screen bg-grey-100">
      <article className="flex flex-auto flex-col items-center justify-center gap-6 self-stretch">
        <section className="flex flex-col items-center">
          <h2 className="text-9xl text-grey-800">Erro</h2>
          <h5 className="text-xl text-grey-500">
            {getErrorStatus(error)} - {getErrorMessage(error)}
          </h5>
        </section>

        <Link to="/">Ir para a Home</Link>
      </article>
    </main>
  );
}
