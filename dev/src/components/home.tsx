import styled from "@emotion/styled";

export function Home(){
    return (
        <Container>
            <Section>첫 섹션 입니다.</Section>
            <Section>두번쨰 섹션 입니다.</Section>
        </Container>
    )
}

const Container = styled.div``
const Section = styled.section`
  margin-bottom: 32px;
`
