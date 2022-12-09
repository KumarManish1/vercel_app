// import logo from './logo.svg';
import './App.css';
import Nav from './components/HeaderNav'

import MedicineDesc from './components/MedicineDesc';
import ItemCategory from './components/ItemCategory';

// const category=[{name:'Paracetamol Tabelts'},{name:'Paracetamol Powder'},{name:'Acecolofenac'},{name:'Megaladrate Simethicone Oral Suspension'},
//  {name:'Mefenamic Paracetamol Syrup'}]

const arr=['Paracetamol Tabelts','Acecolofenac','Megaladrate Simethicone Oral Suspension','Mefenamic Paracetamol Syrup']
const arr1=['Cipmol Paracetamol','Pandal Paracetamol Tablets','Combiflam','Crocin Tablets','Calpol Paracetamol Tablets','Sumo Tablet']
const arr2=['wholesaler','Manufacture','Retailer','Exporter']
const arr3=['500mg','650mg']
const arr4=['Intas Pharmaceutical Ltd','Alkem Laboratories Ltd']

const desc=[{name:'Favipiravir 400mg(fabiflu) Tablets'},{price:'Rs 1,775/ stripe'},{brand:'Glenmark Pharmaceutical Limited'},{address:'PARVAT PATIYA, SURAT, GUJRAT'}]
function App() {
  return (
    
    <>
      <Nav />
      <div className='container-fluid'>
        
        <div class="col-2 ">
          <ItemCategory heading="Related Category"
            other={arr}/>
            <ItemCategory heading="Related Brands"
            other={arr1}/>
             <ItemCategory heading="Business Type"
            other={arr2}/>
            <ItemCategory heading="Strength"
            other={arr3}/>
            <ItemCategory heading="Manufacturer"
            other={arr4}/>
            <ItemCategory heading="Prescription/Non prescription"
            other={arr4}/>
        </div>
        
        <div class="col-8">
          <MedicineDesc name='Favipiravir 400mg(fabiflu) Tablets' price='Rs 1,775/ stripe' brand='Glenmark Pharmaceutical Limited' address='PARVAT PATIYA, SURAT, GUJRAT'/>
          <MedicineDesc name='Favipiravir 400mg(fabiflu) Tablets' price='Rs 1,775/ stripe' brand='Glenmark Pharmaceutical Limited' address='PARVAT PATIYA, SURAT, GUJRAT'/>
          <MedicineDesc name='Favipiravir 400mg(fabiflu) Tablets' price='Rs 1,775/ stripe' brand='Glenmark Pharmaceutical Limited' address='PARVAT PATIYA, SURAT, GUJRAT'/>
          <MedicineDesc name='Favipiravir 400mg(fabiflu) Tablets' price='Rs 1,775/ stripe' brand='Glenmark Pharmaceutical Limited' address='PARVAT PATIYA, SURAT, GUJRAT'/>
          <MedicineDesc name='Favipiravir 400mg(fabiflu) Tablets' price='Rs 1,775/ stripe' brand='Glenmark Pharmaceutical Limited' address='PARVAT PATIYA, SURAT, GUJRAT'/>
          <MedicineDesc name='Favipiravir 400mg(fabiflu) Tablets' price='Rs 1,775/ stripe' brand='Glenmark Pharmaceutical Limited' address='PARVAT PATIYA, SURAT, GUJRAT'/>
        </div>
      </div>
    </>
      
    
    
  );
}

export default App;
