"use client"; // this is a client component
import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Single from "../components/Single";
import Multiple from "../components/Multiple";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [currentTab,setCurrentTab] = useState("single");
  const [single,setSingle] = useState("single");
  const [multiple,setMultiple] = useState("multiple");
 
  const handleTabChange = (e) =>{
      setCurrentTab(e.target.id);
  }

  const pricingFeatureSingle = [
    {
        title: "Unlimited Authentication",
        featureOne: "-",
        featureTwo: "-",
        featureThree: "-",
        featureFour: "unlimited"
    },
    {
        title: "Basic Attribute Mapping",
        featureOne: "-",
        featureTwo: "-",
        featureThree: "-",
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "Autoredirect to IDP",
        featureOne: "-",
        featureTwo: "-",
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "Protect your complete site",
        featureOne: "-",
        featureTwo: "-",
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "SAML single logout",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "Custom SP Certificate",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "SSO Login Audit",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "Custom SP Certificate",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "SSO Login Audit",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "Custom SP Certificate",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "SSO Login Audit",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "Custom SP Certificate",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "SSO Login Audit",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "Custom SP Certificate",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },
    {
        title: "SSO Login Audit",
        featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
        featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
    },


]


const pricingFeatureMultiple =  [
  {
      title: "Unlimited Authentication",
      featureOne: "-",
      featureTwo: "-",
      featureThree: "-",
      featureFour: "unlimited"
  },
  {
      title: "Basic Attribute Mapping",
      featureOne: "-",
      featureTwo: "-",
      featureThree: "-",
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "Autoredirect to IDP",
      featureOne: "-",
      featureTwo: "-",
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "Protect your complete site",
      featureOne: "-",
      featureTwo: "-",
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "SAML single logout",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "Custom SP Certificate",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "SSO Login Audit",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "Custom SP Certificate",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "SSO Login Audit",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "Custom SP Certificate",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "SSO Login Audit",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "Custom SP Certificate",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "SSO Login Audit",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "Custom SP Certificate",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },
  {
      title: "SSO Login Audit",
      featureOne: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureTwo: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureThree: <FontAwesomeIcon icon={faCheck} color="#eb5424" />,
      featureFour: <FontAwesomeIcon icon={faCheck} color="#eb5424" />
  },


]
  
  
  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-5'>We've got a pricing plan that's perfect for you</h2>
      <p className='text-center mt-3'>No Surprise Fees. No Credit Card Required</p>
      <div className={`d-flex justify-content-center align-items-center ${styles.pricingTab}`}>
        <div className={(currentTab === single) ? `${styles.active}` : ""} onClick={handleTabChange} id={single} >Single Site</div>
        <div className={(currentTab === multiple) ? `${styles.active}` : ""} onClick={handleTabChange} id={multiple} >Multiple Site</div>
      </div>
      <div className='pricingSection d-flex justify-content-center align-items-center mt-5' style={{flexDirection : "column"}} >
          {currentTab === "single" ? <Single pricingFeatures={pricingFeatureSingle}/> : <Multiple pricingFeatures={pricingFeatureMultiple}/>}
      </div>
    </div>
  )
}
