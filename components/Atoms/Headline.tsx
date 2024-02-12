const Headline = props => {
  return (
    // <h1 className={`text-3xl font-bold ${
    //     props.className ? props.className : ''
    //   }`}
    // >

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
