import { useEffect, useRef, useState } from "react"
import "./input.scss"
import Croix from '../../assets/img/Croix.svg'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
export default function Input() {
    // PDF start
    const pdfRef = useRef();
    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input). then((canvas) => {
            const imgData = canvas.toDataURL(' image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData,'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('Box With You Devis.pdf');
        });
    };
    // PDF end
    const [items, setItems] = useState([]);
    const [nouvelElement, setNouvelElement] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [volume, setVolume] = useState("");
    const [volumeAsPercentage, setVolumeAsPercentage] = useState(0);
    const [volumePercentageTotal, setVolumePercentageTotal] = useState(0);
    const [boxSize, setboxSize]= useState('');
    const [boxPrice, setboxPrice]= useState('');
    const [boxInfo, setboxInfo]= useState('');
    const smallBox = Number("7.5");
    const mediumBox = Number("15");
    const largeBox = Number("25");
    const extralargeBox = Number("40");
    const [volumeTotal, setvolumeTotal] = useState(0);
    const [ErrorMessage, setErrorMessage] = useState('');
    const [boxColor, setboxColor] = useState('') 
    function volumePercentage() {
        setVolume((Number(length) * Number(width) * Number(height)) / 1000000);
    }
    useEffect(() => {
        let result = 0;
        let percentresult = 0;
        items.forEach(item => {
            result+= Number(item.volume);
        })   
        switch(boxSize){
            case 'S' :
                percentresult=  (result / smallBox) * 100
                setboxColor('green')
            break;
            case 'M' :
                percentresult=  (result / mediumBox) * 100
                setboxColor('yellow')

            break;
            case 'L' :
                percentresult=  (result / largeBox) * 100
                setboxColor('orange')

            break;
            case 'XL' :
                percentresult=  (result / extralargeBox) * 100
                setboxColor('red')

            break;
            default: setErrorMessage("Le volume de vos object ne correspond a aucun de nos boxes")
                    setboxColor('grey')
                break;
        }

        console.log(items);
        if (percentresult !==0){
            setVolumePercentageTotal(percentresult.toFixed(2))
        } else if ( percentresult ==0){
            setVolumePercentageTotal("")
        }else if ( percentresult > 100){
            setVolumePercentageTotal("")
        }
        setvolumeTotal(result);
    }, [items, volume, boxSize]);

    useEffect(()=>{
        if (volumeTotal <= smallBox){
            setboxSize('S');
            setboxPrice('50€ HT / mois');
            setboxInfo(' 2 à 3 m²')
        } else if(volumeTotal <= mediumBox) {
            setboxSize('M');
            setboxPrice('80€ HT / mois');
            setboxInfo(' 3 à 6 m²')
        }else if(volumeTotal <= largeBox) {
            setboxSize('L');
            setboxPrice('140€ HT / mois');
            setboxInfo(' 6 à 10 m²')
        }else if(volumeTotal <= extralargeBox) {
            setboxSize('XL');   
            setboxPrice('200€ HT / mois');
            setboxInfo(' 10 à 16 m²')
        }
        else if(volumeTotal >= extralargeBox) {
            setboxSize('');
            setboxPrice('Aucun boxes disponible');
            setboxInfo(' ')
        }
        }, [volumeTotal])



    const ajouterElement = (event) => {
        event.preventDefault();
            const nouvelElementlist = {element:nouvelElement, volume:volume};
        if (nouvelElement.trim() !== "") {
        setItems([...items, nouvelElementlist]);
        setNouvelElement("");
        
        }
    };
        console.log(items);
    const supprimerElement = (index) => {
        const nouveauxItems = [...items];
        nouveauxItems.splice(index, 1);
        setItems(nouveauxItems);
    };




// Convertir en une valeur entre 615.99 et 316.26
let minValeur_middle = 615.99;
let maxValeur_middle = 316.26;

let minValeur_extrem = 449.57;
let maxValeur_extrem = 160.57;

let middle_color = minValeur_middle + (volumePercentageTotal / 100) * (maxValeur_middle - minValeur_middle);
let extrem_color = minValeur_extrem + (volumePercentageTotal / 100) * (maxValeur_extrem - minValeur_extrem);

// console.log(middle_color); // La valeur résultante
// Formater la valeur résultante avec un maximum de deux chiffres après la virgule
let middle_color_Formate = middle_color.toFixed(2);
let extrem_color_Formate = extrem_color.toFixed(2);
console.log(middle_color_Formate)
console.log(extrem_color_Formate)

// if (volumePercentageTotal == 0){
//     middle_color_Formate = 316.26
//     extrem_color_Formate = 615.99
// }


    return (
        <>

        <div id="Formulaire" className='Formulaire d-flex flex-column justify-content-center align-items-center gap-5' ref={pdfRef}>
        <h4 className='Formulaire__Header d-flex justify-content-center text-primary'>- Votre devis en ligne - {volumePercentageTotal}</h4>
            <div className='Formulaire__Main d-flex justify-content-between'>
            <div className='Formulaire__Main__Left d-flex flex-column justify-content-between align-items-center gap-3'>
                <div className='Formulaire__Main__Left__Offre d-flex flex-row text-primary w-100'><h4>{boxSize}</h4><h5>{boxPrice} <br/>{boxInfo}</h5></div>
                <svg id="Calque_2" className="Formulaire__Main__Left__Box" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551.73 619.88">
                    <g id="Layer_1" data-name="Layer 1">
                        <g>
                        <polygon class={boxColor} points="275.55 0 8.13 150.23 276.75 304.65 544.64 150.56 275.55 0"/>
                        <g>
                            <polygon class="cls-1" points="549.73 449.57 285.25 616.26 285.25 318.33 549.73 162.13 549.73 449.57"/>
                            <polygon class="cls-2" points={`549.73 ${extrem_color_Formate} 285.25 ${middle_color_Formate} 285.25 615.99 549.73 448.8 549.73 449.57`}/>
                        </g>
                        <g>
                            <polygon class="cls-1" points="2 449.57 266.48 616.26 266.48 318.33 2 162.13 2 449.57"/>
                            <polygon class="cls-2" points={`2 449.57 266.48 616.26 266.48 ${middle_color_Formate} 2 ${extrem_color_Formate} 2 449.57`}/>
                        </g>
                        </g>
                    </g>
                    </svg>
                    {/* CLS-2 
                    615.99 (4) = 0% middle -> 316.26 (4) = 100% right-middle
                    449.57 (2) = 0% right-right -> 160.57 (2) = 100% right-right
                    615.99 (4) = 0% middle -> 316.26 (4) = 100% left-middle
                    449.57 (6) = 0% left-left -> 160.57 (2) = 100% left-left
                     */}
            </div>
            <div className="Formulaire__Main__Right d-flex flex-column justify-content-center gap-4">
            <div className="Formulaire__Main__Right__Imput d-flex flex-column w-100">
                <form
                method="post"
                onSubmit={ajouterElement}
                className="d-flex flex-column gap-2"
                >
                <input
                    onChange={(e) => setNouvelElement(e.target.value)}
                    className="border-linear text-primary w-100"
                    type="text"
                    name="furniture"
                    placeholder="Nom de l'objet"
                    value={nouvelElement}
                    required
                />
                <input
                    onChange={(e) => setLength(e.target.value)}
                    className="border-linear text-primary w-100"
                    type="number"
                    name="length"
                    placeholder="Longueur (en cm)"
                    value={length}
                    required
                />
                <input
                    onChange={(e) => setWidth(e.target.value)}
                    className="border-linear text-primary w-100"
                    type="number"
                    name="width"
                    placeholder="Largeur (en cm)"
                    value={width}
                    required
                />
                <input
                    onChange={(e) => setHeight(e.target.value)}
                    className="border-linear text-primary w-100"
                    type="number"
                    name="height"
                    placeholder="Hauteur (en cm)"
                    value={height}
                    required
                />
                <div className="d-flex justify-content-end">
                    <button
                    onClick={volumePercentage}
                    className="Formulaire__Main__Right__Envoyer btn-primary"
                    type="submit"
                    >
                    <h6 className="btn-primary mt-2 mb-2">Ajouter</h6>
                    </button>
                </div>
                </form>
            </div>
            <div className="Formulaire__Main__Right__Demarcation" />
            <div className="delete-zone d-flex flex-column gap-3">
            {items.map((item, index) => (
                            <div className='Delete' key={index}>
                                <span>{item.element} : {item.volume} m³</span>
                                <button className="btn-supp" onClick={() => supprimerElement(index)}><img className='croix' src={Croix} alt="Supprimer cet objet" /></button>
                            </div>
                            ))}

                </div>
                <button className='Formulaire__Main__Right__Confirmer btn-primary w-100' type="submit"><h6 className='btn-primary mt-2 mb-2' onClick={downloadPDF}>Télécharger PDF</h6></button>
            </div>
            
            </div>
            </div>
    </>
);
}
