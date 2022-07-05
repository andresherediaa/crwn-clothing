import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  flex-wrap: wrap;
  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

export const TitleContainer = styled.div`
  font-size: 28px;
  margin-bottom: 25px;
  &:hover{
     cursor:pointer;
     box-shadow: inset 0 0 0 0 #54b3d6;
  }
`;
