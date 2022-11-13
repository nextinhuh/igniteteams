import React from 'react';

import { Container, Form } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

export function Players() {
    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title='Nome da turma'
                subTitle='adicione a galera e separe os times'
            />

            <Form>
                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon='add'
                />
            </Form>

            <Filter
                title='Time A'
            />
        </Container>
    );
}