import React, { useState } from 'react';

function CheckboxForm() {
    // Inicialização do estado para os checkboxes
    const [marcado, setMarcado] = useState({
        adidas: false,
        nike: false,
        puma: false,
        olympikus: false,
        balenciaga: false,
        esporte: false,
        casual: false,
        utilitario: false,
        corrida: false,
        masculino: false,
        feminino: false,
        unissex: false,
        novo: false,
        usado: false
    });

    // Função para lidar com as alterações dos checkboxes
    function Verificado(event) {
        const { name, checked } = event.target;

        // Atualiza o estado com base no checkbox que foi marcado/desmarcado
        setMarcado((prevState) => ({
            ...prevState,
            [name]: checked
        }));

        console.log(name, checked); // Para debug
    }

    return (
        <>
            <div className="container">
                <div className="row d-Flex flex-row col-12">
                    <hr />
                    <div className="col col-2 mt-5">
                        <h1> Filtrar por: </h1>
                        <hr />
                        <article>
                            <h5> Marcas </h5>
                            <section className="marcas">
                                <input type="checkbox" name="adidas" checked={marcado.adidas} onChange={Verificado} />
                                Adidas
                                <br />
                                <input type="checkbox" name="nike" checked={marcado.nike} onChange={Verificado} />
                                Nike
                                <br />
                                <input type="checkbox" name="puma" checked={marcado.puma} onChange={Verificado} />
                                Puma
                                <br />
                                <input type="checkbox" name="olympikus" checked={marcado.olympikus} onChange={Verificado} />
                                Olympikus
                                <br />
                                <input type="checkbox" name="balenciaga" checked={marcado.balenciaga} onChange={Verificado} />
                                Balenciaga
                                <br />
                            </section>

                            <h5> Categorias </h5>
                            <section className="categorias">
                                <input type="checkbox" name="esporte" checked={marcado.esporte} onChange={Verificado} />
                                Esporte
                                <br />
                                <input type="checkbox" name="casual" checked={marcado.casual} onChange={Verificado} />
                                Casual
                                <br />
                                <input type="checkbox" name="utilitario" checked={marcado.utilitario} onChange={Verificado} />
                                Utilitário
                                <br />
                                <input type="checkbox" name="corrida" checked={marcado.corrida} onChange={Verificado} />
                                Corrida
                                <br />
                            </section>

                            <h5> Gênero </h5>
                            <section className="genero">
                                <input type="checkbox" name="masculino" checked={marcado.masculino} onChange={Verificado} />
                                Masculino
                                <br />
                                <input type="checkbox" name="feminino" checked={marcado.feminino} onChange={Verificado} />
                                Feminino
                                <br />
                                <input type="checkbox" name="unissex" checked={marcado.unissex} onChange={Verificado} />
                                Unissex
                                <br />
                            </section>

                            <h5> Estado</h5>
                            <section className="condicao">
                                <input type="radio" name="novo" checked={marcado.novo} onChange={Verificado} />
                                Novo
                                <br />
                                <input type="radio" name="usado" checked={marcado.usado} onChange={Verificado} />
                                Usado
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckboxForm;
