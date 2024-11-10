import Link from "next/link"

export default function Footer(){
    return(
        <div>
            <ul>
                <li><Link href="/">FaceBook</Link></li>
                <li><Link href="#">Youtube</Link></li>
                <li><Link href="#">Instagram</Link></li>
                <li><Link href="#">Linkedin</Link></li>
                
            </ul>
        </div>

    )
}