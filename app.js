const btnAddParagraphe = document.getElementById('btn_add_ligne');
const lignesContainer = document.getElementById('lignes_container');


let lignes = [];
let paragraphes = [];


btnAddParagraphe.addEventListener('click', addParagraphe);



function addParagraphe () {

    const indexPara = paragraphes.length;
    const paragraphe = {
        titre:'',
        montant:0,
    };
    paragraphes.push(paragraphe)

    const titleParagrphe = document.createElement('div');
    titleParagrphe.setAttribute('data-index', indexPara);

    const ligneLi = document.createElement('ul');

    const labelTitle = document.createElement('label');
    labelTitle.textContent = 'Titre : ';
    
    const title =  document.createElement('input');
    title.setAttribute('type', 'text');
 
    const labeMonPara = document.createElement('label');
    labeMonPara.textContent = 'Montant : ';
    const montantPara = document.createElement('input');
    montantPara.type = "number";
    montantPara.pattern = "[0-9]*";


    const divSsPara = document.createElement('div');
    const btnAddSsPara = document.createElement('button');
    const labeBtnAddSsPara = document.createElement('label');
    labeBtnAddSsPara.textContent = 'Rajouter une ligne de depense ';
    const plusSign = document.createElement('span');
    plusSign.textContent = '+';
    btnAddSsPara.appendChild(plusSign);
    divSsPara.appendChild(btnAddSsPara);
    divSsPara.appendChild(labeBtnAddSsPara);


    ligneLi.appendChild(labelTitle);
    ligneLi.appendChild(title);
    ligneLi.appendChild(labeMonPara);
    ligneLi.appendChild(montantPara);
    ligneLi.appendChild(divSsPara);

    titleParagrphe.appendChild(ligneLi)
    lignesContainer.appendChild(titleParagrphe);

    btnAddSsPara.addEventListener('click', () => {
        const lignesContainer2 = document.createElement('div');
        lignesContainer2.classList.add('lignes_container2');
        divSsPara.appendChild(lignesContainer2);
        ajouterLigne(lignesContainer2);
    });
}


function ajouterLigne(lignesContainer2) {
    const index = lignes.length;
    const ligne = {
        type: 'mo',
        titreMo: '',
        nbJoursPrevus: 0,
        nbPersonnePrevus: 0,
        titreMateriel: '',
        montantMateriel: 0,
    };

    lignes.push(ligne);

    const ligneDiv = document.createElement('div');

    ligneDiv.classList.add('ligne');
    ligneDiv.setAttribute('data-index', index);

    const typeSelect = document.createElement('select');
    const depart = document.createElement('option');
    depart.value = '--';
    depart.text = '--';
    const optionMo = document.createElement('option');
    optionMo.value = 'mo';
    optionMo.text = 'MO';
    const optionMateriel = document.createElement('option');
    optionMateriel.value = 'materiel';
    optionMateriel.text = 'Matériel';
    typeSelect.add(depart);
    typeSelect.add(optionMo);
    typeSelect.add(optionMateriel);


    typeSelect.addEventListener('change', (event) => {
        
        ligneDiv.innerHTML = '';

            if (event.target.value === 'mo') {
            const inputNomMo = document.createElement('input');
            inputNomMo.type = 'text';
            inputNomMo.placeholder = 'Nom de la tâche à réaliser :';
            ligneDiv.appendChild(inputNomMo);
        
            const btnValider = document.createElement('button');
            btnValider.innerText = 'Valider';
            btnValider.addEventListener('click', () => {
                ligne.titreMo = inputNomMo.value;
            });
            ligneDiv.appendChild(btnValider);
            
            } else if (event.target.value === 'materiel') {
            const inputNomMateriel = document.createElement('input');
            inputNomMateriel.type = 'text';
            inputNomMateriel.placeholder = 'Matériel à acheter :';
            ligneDiv.appendChild(inputNomMateriel);
        
            const inputMontantMateriel = document.createElement('input');
            inputMontantMateriel.type = 'number';
            inputMontantMateriel.min = '0';
            inputMontantMateriel.placeholder = 'Montant :';
            ligneDiv.appendChild(inputMontantMateriel);
        
            const btnValider = document.createElement('button');
            btnValider.innerText = 'Valider';
            btnValider.addEventListener('click', () => {
                ligne.titreMateriel = inputNomMateriel.value;
                ligne.montantMateriel = inputMontantMateriel.value;
          });
          ligneDiv.appendChild(btnValider);
        }
      });
    
      ligneDiv.appendChild(typeSelect);
      lignesContainer2.appendChild(ligneDiv)


    const btnModifier = document.createElement('button');
    btnModifier.innerText = 'Modifier';
    btnModifier.classList.add('btn_modifier');
    btnModifier.addEventListener('click', () => {
        modifierLigne(index);
    });    
    
    const btnSupprimer = document.createElement('button');
    btnSupprimer.innerText = 'Supprimer';
    btnSupprimer.classList.add('btn_supprimer');
    btnSupprimer.addEventListener('click', () => {
        supprimerLigne(index);
    });


    ligneDiv.appendChild(typeSelect);
    //ligneDiv.appendChild(btnModifier);
    //ligneDiv.appendChild(btnSupprimer);

    lignesContainer2.appendChild(ligneDiv);
}

