// 1 templete expression

const TemplateExpression = () => {
  const data = {
    name: "PATRICK",
    age: 36,
    job: "Programador",
  };
  return (
    <div>
      <p>A soma de 1 + 1 é {1 + 1}</p>
      <h3>
        Seu nome é {data.name} tem a idade {data.age} e trabalha como {data.job}
      </h3>
    </div>
  );
};

export default TemplateExpression;
