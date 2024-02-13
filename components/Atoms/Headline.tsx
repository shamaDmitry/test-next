const Headline = (props: { className?: string; children: React.ReactNode }) => {
  return (
    <h1
      className={[
        'text-3xl font-bold mb-4',
        props.className ? props.className : '',
      ].join(' ')}
    >
      {props.children}
    </h1>
  );
};

export default Headline;
