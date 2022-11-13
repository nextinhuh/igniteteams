import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';

export default function Groups() {
    return (
        <Container>
            <Header />

            <Highlight
                title='Turmas'
                subTitle='jogue com sua turma'
            />

            <GroupCard
                title='Galera do Ignite'
            />
        </Container>
    );
}
