import { Div, Title } from "@/app/atoms"
import Card from "@/app/molecules/Card"

const Footer = () => {
    return (
        <footer className="bg-primary p-10">
            <Div className="flex justify-between h-44">
                <Div>
                    <Title text="동의대학교" className="text-accent" fontSize="text-display2" textAlign="text-left"/>
                    <p className="text-white font-light text-custom-small">F4 Capston DEU Reservation Service</p>
                </Div>
                <Div className="flex flex-col text-white">
                    <Title text="F4 MEMBER" fontSize="text-caption" textAlign="text-left" className="mb-4"/>
                    <strong className="font-light text-custom-small">20182382 김진우</strong>
                    <strong className="font-light text-custom-small">20182344 박병주</strong>
                    <strong className="font-light text-custom-small">20182381 박준영</strong>
                    <strong className="font-light text-custom-small">20182380 최동우</strong>
                </Div>
                <Div className="flex flex-col text-white">
                    <Title text="Contact us" fontSize="text-caption" textAlign="text-left" className="mb-4"/>
                    <strong className="font-light text-custom-small">Call: 010-0000-0000</strong>
                    <strong className="font-light text-custom-small">Email: DEU@deu.ac.kr</strong>
                    <strong className="font-light text-custom-small">Address: 47340 부산광역시 부산진구 엄광로 176 (가야동)</strong>
                </Div>
                <Div className="flex flex-col text-white">
                    <Title text="수고하셨습니다" fontSize="text-caption" textAlign="text-left"className="mb-4"/>
                    <Card color="bg-accent text-primary" className="w-48 h-11 rounded-xl" text="F4의 캡스톤 푸터" />
                </Div>
            </Div>
        </footer>
    )
}

export default Footer