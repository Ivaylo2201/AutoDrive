type PageProps = React.PropsWithChildren;

export default function Page({ children }: PageProps) {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center'>
      {children}
    </section>
  );
}
