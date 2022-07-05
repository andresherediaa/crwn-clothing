import CollectionItem from "../collection-item/collection-item.componnet";
import {
  CollectionPreviewContainer,
  TitleContainer,
} from "./collection-preview.styles";
import { useNavigate } from "react-router-dom";
const CollectionPreview = ({ routeName, items }) => {
  let navigate = useNavigate();
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(routeName)}>
        {routeName.toUpperCase()}
      </TitleContainer>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
