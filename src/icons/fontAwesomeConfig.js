import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faLinkedin, faGithub, faMedium, faReact, faHtml5, faCss3Alt, faJs, faLinux, faNodeJs, faEthereum} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function initFontAwesome() {


    library.add(fab, faLinkedin,faEnvelope, faGithub, faMedium, faReact, faHtml5, faCss3Alt, faJs,faLinux,faNodeJs, faEthereum,faGlobe);
}
export default initFontAwesome;