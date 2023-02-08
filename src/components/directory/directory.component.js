import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryItemsContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryItemsContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryItemsContainer>
  );
};

export default Directory;
