import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import '../CountryDetail.css';

function CountryDetail(props){


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    const {name} = useParams();


    useEffect(() => {
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItem(result);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [name])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="text-align-center">Loading...</div>;
    } else {
  return (

    <div className="detail-container">
    <div className="back-btn-container">
      <Link to="/"><i class="fas fa-long-arrow-alt-left"></i><span className="back"> Back</span></Link>
    </div>
      <section className="detail-section">
        {item.map(x => {
            const {numericCode, currencies, languages, borders, nativeName, name, population, region, capital, flag, topLevelDomain, subregion} = x;

            return (
              <article className="flex" key={numericCode}>
                <div>
                  <img className="detail-flag" src={flag} alt={name} />
                </div>

                <div className="detail-text-container">
                  <div>
                    <h3><span className="detail-name">{name}</span></h3>
                    <h3>Native Name: <span>{nativeName}</span></h3>
                    <h3>Population: <span>{population}</span></h3>
                    <h3>Region: <span>{region}</span></h3>
                    <h3>Sub Region: <span>{subregion}</span></h3>
                    <h3>Capital: <span>{capital}</span></h3>
                  </div>
                  <div className="detail-languages-div">
                    <h3>Top Level Domain: <span>{topLevelDomain}</span></h3>
                    <h3>Currency: <span>{currencies.map(c => c.name).join(', ')}</span></h3>
                    <h3>Languages: <span>{languages.map(c => c.name).join(', ')}</span></h3>
                  </div>
                  <div className="borderCountries-container">
                    <h3>Border Countries:</h3>
                    <div className="flex borderCountries">
                    {
                      borders.map(border => {
                       // console.log(border)

                        const matchingObj = {
                          "KOS": "Kosovo, Republic of",
                          "FRA": "France",
                          "DEU": "Germany",
                          "LUX": "Luxembourg",
                          "NLD": "Netherlands",
                          "BEL": "Belgium",
                          "AFG": "Afghanistan",
	                  "ALA": "Aland Islands",
		          "ALB": "Albania",
                          "DZA": "Algeria",
                          "ASM": "American Samoa",
	                  "AND": "Andorra",
	                  "AGO": "Angola",
	                  "AIA": "Anguilla",
 		          "ATA": "Antarctica",
		          "ATG": "Antigua and Barbuda",
		          "ARG": "Argentina",
	                  "ARM": "Armenia",
		          "ABW": "Aruba",
	                  "AUS": "Australia",
                          "AUT": "Austria",
	                  "AZE": "Azerbaijan",
                          "BHS": "Bahamas",
                          "BHR": "Bahrain",
                          "BGD": "Bangladesh",
                          "BRB": "Barbados",
                          "BLR": "Belarus",
                          "BLZ": "Belize",
                          "BEN": "Benin",
                          "BMU": "Bermuda",
                          "BTN": "Bhutan",
                          "BOL": "Bolivia",
                          "BIH": "Bosnia and Herzegovina",
                          "BWA": "Botswana",
                          "BVT": "Bouvet Island",
                          "BRA": "Brazil",
                          "VGB": "British Virgin Islands",
                          "IOT": "British Indian Ocean Territory",
                          "BRN": "Brunei Darussalam",
                          "BGR": "Bulgaria",
                          "BFA": "Burkina Faso",
                          "BDI": "Burundi",
                          "KHM": "Cambodia",
                          "CMR": "Cameroon",
                          "CAN": "Canada",
                          "CPV": "Cape Verde",
                          "CYM": "Cayman Islands",
                          "CAF": "Central African Republic",
                          "TCD": "Chad",
                          "CHL": "Chile",
                          "CHN": "China",
                          "HKG": "Hong Kong, SAR China",
                          "MAC": "Macao, SAR China",
                          "CXR": "Christmas Island",
                          "CCK": "Cocos (Keeling) Islands",
                          "COL": "Colombia",
                          "COM": "Comoros",
                          "COG": "Congo (Brazzaville)",
                          "COD": "Congo, (Kinshasa)",
                          "COK": "Cook Islands",
                          "CRI": "Costa Rica",
                          "CIV": "Côte d'Ivoire",
		          "HRV": "Croatia",
                          "CUB": "Cuba",
                          "CYP": "Cyprus",
                          "CZE": "Czech Republic",
                          "DNK": "Denmark",
                          "DJI": "Djibouti",
	                  "DMA": "Dominica",
                          "DOM": "Dominican Republic",
                          "ECU": "Ecuador",
                          "EGY": "Egypt",
                          "SLV": "El Salvador",
	                  "GNQ": "Equatorial Guinea",
                          "ERI": "Eritrea",
	                  "EST": "Estonia",
                          "ETH": "Ethiopia",
	                  "FLK": "Falkland Islands (Malvinas)",
                          "FRO": "Faroe Islands",
                          "FJI": "Fiji",
                          "FIN": "Finland",
                          "GUF": "French Guiana",
                          "PYF": "French Polynesia",
                          "ATF": "French Southern Territories",
                          "GAB": "Gabon",
                          "GMB": "Gambia",
		          "GEO": "Georgia",
                          "GHA": "Ghana",
                          "GIB": "Gibraltar",
                          "GRC": "Greece",
                          "GRL": "Greenland",
                          "GRD": "Grenada",
                          "GLP": "Guadeloupe",
                          "GUM": "Guam",
                          "GTM": "Guatemala",
                          "GGY": "Guernsey",
                          "GIN": "Guinea",
                          "GNB": "Guinea-Bissau",
                          "GUY": "Guyana",
                          "HTI": "Haiti",
                          "HMD": "Heard and Mcdonald Islands",
                          "VAT": "Vatican City",
                          "HND": "Honduras",
                          "HUN": "Hungary",
                          "ISL": "Iceland",
                          "IND": "India",
                          "IDN": "Indonesia",
                          "IRN": "Iran, Islamic Republic of",
                          "IRQ": "Iraq",
                          "IRL": "Ireland",
                          "IMN": "Isle of Man",
                          "ISR": "Israel",
                          "ITA": "Italy",
                          "JAM": "Jamaica",
                          "JPN": "Japan",
                          "JEY": "Jersey",
                          "JOR": "Jordan",
                          "KAZ": "Kazakhstan",
                          "KEN": "Kenya",
                          "KIR": "Kiribati",
                          "PRK": "Korea (North)",
                          "KOR": "Korea (South)",
                          "KWT": "Kuwait",
                          "KGZ": "Kyrgyzstan",
                          "LAO": "Laos",
                          "LVA": "Latvia",
                          "LBN": "Lebanon",
                          "LSO": "Lesotho",
                          "LBR": "Liberia",
                          "LBY": "Libya",
                          "LIE": "Liechtenstein",
                          "LTU": "Lithuania",
                          "MKD": "Macedonia, Republic of",
                          "MDG": "Madagascar",
                          "MWI": "Malawi",
                          "MYS": "Malaysia",
                          "MDV": "Maldives",
                          "MLI": "Mali",
                          "MLT": "Malta",
                          "MHL": "Marshall Islands",
                          "MTQ": "Martinique",
                          "MRT": "Mauritania",
                          "MUS": "Mauritius",
                          "MYT": "Mayotte",
                          "MEX": "Mexico",
                          "FSM": "Micronesia, Federated States of",
                          "MDA": "Moldova",
                          "MCO": "Monaco",
                          "MNG": "Mongolia",
                          "MNE": "Montenegro",
                          "MSR": "Montserrat",
                          "MAR": "Morocco",
                          "MOZ": "Mozambique",
                          "MMR": "Myanmar",
                          "NAM": "Namibia",
                          "NRU": "Nauru",
                          "NPL": "Nepal",
                          "ANT": "Netherlands Antilles",
                          "NCL": "New Caledonia",
                          "NZL": "New Zealand",
                          "NIC": "Nicaragua",
                          "NER": "Niger",
                          "NGA": "Nigeria",
                          "NIU": "Niue",
                          "NFK": "Norfolk Island",
                          "MNP": "Northern Mariana Islands",
                          "NOR": "Norway",
                          "OMN": "Oman",
                          "PAK": "Pakistan",
                          "PLW": "Palau",
                          "PSE": "Palestinian Territory",
                          "PAN": "Panama",
                          "PNG": "Papua New Guinea",
                          "PRY": "Paraguay",
                          "PER": "Peru",
                          "PHL": "Philippines",
                          "PCN": "Pitcairn",
                          "POL": "Poland",
                          "PRT": "Portugal",
                          "PRI": "Puerto Rico",
                          "QAT": "Qatar",
                          "REU": "Réunion",
                          "ROU": "Romania",
                          "RUS": "Russian Federation",
                          "RWA": "Rwanda",
                          "BLM": "Saint-Barthélemy",
                          "SHN": "Saint Helena",
                          "KNA": "Saint Kitts and Nevis",
                          "LCA": "Saint Lucia",
                          "MAF": "Saint-Martin (French part)",
                          "SPM": "Saint Pierre and Miquelon",
                          "VCT": "Saint Vincent and Grenadines",
                          "WSM": "Samoa",
                          "SMR": "San Marino",
                          "STP": "Sao Tome and Principe",
                          "SAU": "Saudi Arabia",
                          "SEN": "Senegal",
                          "SRB": "Serbia",
                          "SYC": "Seychelles",
                          "SLE": "Sierra Leone",
                          "SGP": "Singapore",
                          "SVK": "Slovakia",
                          "SVN": "Slovenia",
                          "SLB": "Solomon Islands",
                          "SOM": "Somalia",
                          "ZAF": "South Africa",
                          "SGS": "South Georgia and the South Sandwich Islands",
                          "SSD": "South Sudan",
                          "ESP": "Spain",
                          "LKA": "Sri Lanka",
                          "SDN": "Sudan",
                          "SUR": "Suriname",
                          "SJM": "Svalbard and Jan Mayen Islands",
                          "SWZ": "Swaziland",
                          "SWE": "Sweden",
                          "CHE": "Switzerland",
                          "SYR": "Syrian Arab Republic (Syria)",
                          "TWN": "Taiwan, Republic of China",
                          "TJK": "Tajikistan",
                          "TZA": "Tanzania, United Republic of",
                          "THA": "Thailand",
                          "TLS": "Timor-Leste",
                          "TGO": "Togo",
                          "TKL": "Tokelau",
                          "TON": "Tonga",
                          "TTO": "Trinidad and Tobago",
                          "TUN": "Tunisia",
                          "TUR": "Turkey",
                          "TKM": "Turkmenistan",
                          "TCA": "Turks and Caicos Islands",
                          "TUV": "Tuvalu",
                          "UGA": "Uganda",
                          "UKR": "Ukraine",
                          "ARE": "United Arab Emirates",
                          "GBR": "United Kingdom",
                          "USA": "United States of America",
                          "UMI": "US Minor Outlying Islands",
                          "URY": "Uruguay",
                          "UZB": "Uzbekistan",
                          "VUT": "Vanuatu",
                          "VEN": "Venezuela",
                          "VNM": "Viet Nam",
                          "VIR": "Virgin Islands",
                          "WLF": "Wallis and Futuna Islands",
                          "ESH": "Western Sahara",
                          "YEM": "Yemen",
                          "ZMB": "Zambia",
                          "ZWE": "Zimbabwe"
                          }

                        return (
                          <ul key={border}>
                            <li>{matchingObj[border]}</li>
                          </ul>
                        )
                      })
                    }
                    </div>
                  </div>
                </div>
              </article>
            )
        })}
      </section>
    </div>
  )
}
}

export default CountryDetail;
