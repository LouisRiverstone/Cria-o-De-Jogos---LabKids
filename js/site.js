$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('.parallax').parallax();
});

$("button").click(function () {
    $(this).addClass('success');
})

let app = new Vue({
    el: '#app',
    data: {
        aplicativos: [
            {
                nome: "Engine 001",
                descricao: ["001 Game Creator é uma interface de desenvolvimento de jogos, incluindo todos os itens necessários para você começar do zero.",
                    "Com ele, você possui o ambiente adequado para trabalhar na produção dos cenários, reduzindo o tempo necessário para a programação e diminuindo os custos do processo.",
                    "Além disso, o programa traz vários exemplos para você compreender o seu funcionamento, além de um sistema de ajuda com um tutorial completo. Assim, mesmo que você não possua muita afinidade com esse tipo de editor, pode entender rapidamente a sua mecânica de uso."],
                imagem: "img/engine001.jpg",
                botao: {
                    texto: "Baixar",
                    link: "https://drive.google.com/file/d/14z-EfjzBPYYrDGmTTq1zPgTvc6oBUpvE/view"
                }
            },
            {
                nome: "MagicaVoxel",
                descricao: ["MagicaVoxel é um programa para a criação e edição de modelos em voxel (volumetric picture elements, em inglês). A ferramenta permite, grosso modo, que pixels em 3D sejam moldados sem grandes complicações; imagens formadas por cubos podem ser, assim, forjadas para o desenvolvimento até mesmo de animações no melhor estilo 8-bits."],
                imagem: "img/magica.png",
                botao: {
                    texto: "Baixar",
                    link: "https://ephtracy.github.io/"
                }
            }
        ],
        jogos: [
            {
                ano: "2018 - 1",
                producoes: [
                    {
                        turma: "A",
                        games: [
                            {
                                criador: "Caio Angelo Gomes da Silva",
                                nomeJogo: "Warriors Adventure",
                                link: "",
                            },
                            {
                                criador: "Daniel Almeida Torquato",
                                nomeJogo: "Guerreiros de RPG",
                                link: "",
                            },
                            {
                                criador: "Davi Cosmo Dos Santos",
                                nomeJogo: "PlasmaGamer",
                                link: "",
                            },
                            {
                                criador: "Ernesto Rafael da Silva Lemos",
                                nomeJogo: "The Incredible Coxinha Game",
                                link: "",
                            },
                            {
                                criador: "Gabriel Leandro Dias da Silva",
                                nomeJogo: "Nome Enorme",
                                link: "",
                            },
                            {
                                criador: "Gustavo Rodrigues Lacerda",
                                nomeJogo: "Game Box",
                                link: "",
                            },
                            {
                                criador: "Heitor da Costa Borges",
                                nomeJogo: "Ractaquer",
                                link: "",
                            },
                            {
                                criador: "Matheus Gomes dos Santos Bonfim",
                                nomeJogo: "4 World",
                                link: "",
                            },
                            {
                                criador: "Matheus Silva Souza Azevedo",
                                nomeJogo: "The Incredible Potato Game",
                                link: "",
                            },
                            {
                                criador: "Miguel Almeida Torquato",
                                nomeJogo: "Imperio BR",
                                link: "",
                            },
                            {
                                criador: "Pedro da Costa Borges",
                                nomeJogo: "Admant. A Falha",
                                link: "",
                            },
                            {
                                criador: "Pedro Gomes dos Santos Bonfim",
                                nomeJogo: "Ação e Aventura",
                                link: "",
                            },
                            {
                                criador: "Pietro Borges Diogo de Vasconselos",
                                nomeJogo: "Fiat",
                                link: "",
                            },
                            {
                                criador: "Thiago Rodrigues Lacerda",
                                nomeJogo: "Game",
                                link: "",
                            },
                            {
                                criador: "Yuri Nunes Miranda",
                                nomeJogo: "Haunted House Escape",
                                link: "",
                            }
                        ]
                    },
                    {
                        turma: "B",
                        games: [
                            {
                                criador: "Arthur Robles Macedo de Morais",
                                nomeJogo: "ME",
                                link: "",
                            },
                            {
                                criador: "Enzo Ramos de Souza",
                                nomeJogo: "Sem Nome",
                                link: "",
                            },
                            {
                                criador: "Guilherme Lopes Dos Santos",
                                nomeJogo: "Jogo",
                                link: "",
                            },
                            {
                                criador: "Julia Ornelas de Melo",
                                nomeJogo: "Tanto Faz",
                                link: "",
                            },
                            {
                                criador: "Maria Eduarda de Souza Lima",
                                nomeJogo: "Mary Love",
                                link: "",
                            },
                            {
                                criador: "Ainda em Construção",
                                nomeJogo: "",
                                link: "",
                            },

                        ]
                    }
                ]
            },
            {
                ano: "2018 - 2",
                producoes: [
                    {
                        turma: "Unica",
                        games: [
                            {
                                criador: "Enzo Ramos de Souza",
                                nomeJogo: "Projeto Final",
                                link: "",
                            },
                            {
                                criador: "Felipe Rafael Aguiar Lima",
                                nomeJogo: "Projeto Final",
                                link: "",
                            },
                            {
                                criador: "Gustavo Rodrigues Lacerda",
                                nomeJogo: "Projeto Final",
                                link: "",
                            },
                            {
                                criador: "Matheus Rodrigues de Matos",
                                nomeJogo: "Projeto Final",
                                link: "",
                            },
                            {
                                criador: "Matheus Silva Souza Azevedo",
                                nomeJogo: "Projeto Final",
                                link: "",
                            },
                            {
                                criador: "Enzo Ramos de Souza",
                                nomeJogo: "Projeto Final",
                                link: "",
                            }
                        ]
                    }
                ]
            }
        ],
        noticias: [
            {
                nome: "Financiamento Coletivo",
                imagem: "img/financiamento.jpg",
                texto: [
                    "O LABKIDS FESTIVAL precisa da sua ajuda para promover o trabalho de crianças de 8 a 12 anos realizado nos cursos do projeto. Nossa campanha de financiamento coletivo foi criada para reunir as pessoas que querem colaborar com as ações do evento. Confira e não deixe de participar.",
                    "O doador receberá as seguintes recompensas:",
                    "A partir de 10 reais: adesivo e bottom.",
                    "20 reais: adesivo, bottom e marcador de página.",
                    "50 reais: adesivo, bottom, marcador de página, caneta e copo oficial.",
                    "100 reais: adesivo, bottom, marcador de página, caneta, copo e camiseta oficial.",
                    "Os brindes poderão ser retirados no dia do evento (08/12/2018) sem custo, na recepção do LabKids Festival.Estaremos recebendo as doações pessoalmente, via boleto, cartão e pelo sistema de vakinha online"

                ],
                botao: {
                    texto: "Financiar",
                    link: "http://vaka.me/jo9v2d"
                }
            },
            {
                nome: "LabKids Festival",
                imagem: "img/festival.jpg",
                texto: ["Evento voltado para público de todas as idades. Somos uma startup de educação para crianças.Confirme presença em nosso evento! Traga seu pequeno e venha se divertir conosco!"]
            }
        ]
    },
    mounted: function () {
        for (const i in this.jogos) {
            const ano = this.jogos[i].ano
            for (const p in this.jogos[i].producoes) {
                const turma = this.jogos[i].producoes[p].turma
                for (const g in this.jogos[i].producoes[p].games) {
                    const criador = this.jogos[i].producoes[p].games[g].criador
                    const nomeJogo = this.jogos[i].producoes[p].games[g].nomeJogo
                    this.jogos[i].producoes[p].games[g].link = encodeURI("jogos/" + ano + "/" + turma + "/" + criador + " - " + nomeJogo + "/index.html")
                }
            }
        }
    }
})
