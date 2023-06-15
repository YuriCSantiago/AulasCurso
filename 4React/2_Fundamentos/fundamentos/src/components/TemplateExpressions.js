const TemplateExpressions = () => {

    const name = 'Yuri';
    const data = {
        age: 26,
        job: 'Programmer',
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Voce atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log('JSX React')}</p>
        </div>
    );
};

export default TemplateExpressions;