import React from 'react'
import * as S from './styles'

const ChipsModal = ({
    chips
}) => {
    return (
        <S.ModalContainer data-testid='container'>
            {chips?.map((chip, index) => (
                <S.Chip data-testid='chip' key={index}>
                    {chip}
                </S.Chip>
            ))}
        </S.ModalContainer>
    )
}

export default ChipsModal