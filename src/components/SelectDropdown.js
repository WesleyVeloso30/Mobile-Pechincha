import SearchableDropdown from "./react-native-searchable-dropdown";
import { useState } from "react";

const SelectDropdown = ({ placeholder, listItems }) => {
  const [selectedItems, setSelectedItems] = useState(null);

  return (
    <SearchableDropdown
      multi={false}
      onRemoveItem={(item, index) => {
        const items = selectedItems.filter((sItem) => sItem.id !== item.id);
        setSelectedItems(items);
      }}
      onTextChange={(text) => console.log(text)}
      //On text change listner on the searchable input
      onItemSelect={(item) => {
        setSelectedItems(item);

        if (
          item.name === "Remover selecionado" ||
          item.titles === "Remover selecionado"
        )
          setSelectedItems(null);

        // console.log(selectedItems);
      }}
      //onItemSelect called after the selection from the dropdown
      containerStyle={{ width: "100%" }}
      // selectedItems={console.log(selectedItems)}
      //suggestion container style
      textInputStyle={{
        //inserted text style
        padding: 12,
        fontSize: 17,
        paddingLeft: 6,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#FAF7F6",
      }}
      itemStyle={{
        //single dropdown item style
        padding: 10,
        marginTop: 2,
        backgroundColor: "#FAF9F8",
        borderColor: "#bbb",
        borderWidth: 1,
      }}
      itemTextStyle={{
        //text style of a single dropdown item
        color: "#222",
      }}
      itemsContainerStyle={{
        //items container style you can pass maxHeight
        //to restrict the items dropdown hieght
        maxHeight: "70%",
      }}
      chip={false}
      items={listItems}
      //mapping of item array
      // defaultIndex={2}
      //default selected item index
      placeholderTextColor="#000000"
      placeholder={
        selectedItems?.name
          ? selectedItems.name
          : selectedItems?.titles
          ? selectedItems.titles
          : placeholder
          ? placeholder
          : "Selecione"
      }
      //place holder for the search input
      resetValue={false}
      //reset textInput Value with true and false state
      // underlineColorAndroid="transparent"
      //To remove the underline from the android input
    />
  );
};

export default SelectDropdown;
