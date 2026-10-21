import {waLink} from '../../data/content.js'
import './WhatsAppFloat.css'
export default function WhatsAppFloat(){
  return <a className="wa-float" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
}
