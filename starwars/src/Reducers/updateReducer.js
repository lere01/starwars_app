export const initialState = {
  listOfAllNames: [],
  namesByUrls: [],
  individualRecord: [],
  isLoading: true,
  check: false,
  singleDetail: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ALL_PERSONS":
      const nameHolder = [];
      const urlHolder = [];

      action.payload.forEach(item => {
        nameHolder.push(item["name"]);
        let foo = [item["name"], item["url"]];
        urlHolder.push(foo);
      });

      return {
        ...initialState,
        listOfAllNames: nameHolder,
        namesByUrls: urlHolder,
        check: true,
        isLoading: false
      };

    default:
      return state;
  }
}
