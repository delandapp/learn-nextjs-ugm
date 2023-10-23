import Footer from "@/pages/components/footer"
import Header from "@/pages/components/header"
import { Container } from "@mantine/core"
import FeaturesCards from '@/pages/components/card-feature'
import FeaturesImages from '@/pages/components/card-skil'

export function Layouts({children}) {
    return (
        <>
        <Header />
                { children }
                <FeaturesCards/>
                <FeaturesImages/>
        <Footer />
        </>
    )
}