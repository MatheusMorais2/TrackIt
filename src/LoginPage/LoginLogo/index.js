import styled from 'styled-components';
import LogoImg from '../../Assets/Group 8.png'

export default function LoginLogo() {
    return (
        <Logo 
            src={LogoImg}
            alt='TrackIt Logo'
        />
    );
};

const Logo = styled.img`
    width: 180px;
    height: 178px;
`;

/* https://previews.123rf.com/images/artgan/artgan1801/artgan180100456/93753536-cadre-aquarelle-carr%C3%A9-cadre-abstrait-illustration-d-un-mod%C3%A8le-de-peinture-peinture-%C3%A0-carreaux-un-.jpg */