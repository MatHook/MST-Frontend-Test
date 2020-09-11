import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: [
    {
      id: 0,
      visible: false,
      title: "Архитектура",
      image: "../../public/IllustrationMask - Архитектура.jpg",
      content:
        "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
    },
    {
      id: 1,
      visible: false,
      image: "../../public/IllustrationMask - Благоустройство.jpg",
      title: "Благоустройство",
      content:
        "Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом",
    },
    {
      id: 2,
      visible: true,
      image: "../../public/IllustrationMask - Безопасность.jpg",
      title: "Безопастность",
      content:
        "Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних",
    },
    {
      id: 3,
      image: "../../public/IllustrationMask - Инженерия.jpg",
      visible: false,
      title: "Инженерия",
      content:
        "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
    },
    {
      id: 4,
      image: "../../public/IllustrationMask - Инфраструктура.jpg",
      visible: false,
      title: "Инфраструктура",
      content:
        "Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса",
    },
    {
      id: 5,
      image: "../../public/IllustrationMask - Транспортная доступность.jpg",
      visible: false,
      title: "Транспортная доступность",
      content:
        "Жилой комплекс «Первомайска» расположен в престижном Академическом районе",
    },
  ],
  reducers: {
    contentUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingContent = state.entities[id];
      if (existingContent) {
        existingContent.title = title;
        existingContent.content = content;
      }
    },
  },
});

export const { contentUpdated } = contentSlice.actions;

export default contentSlice.reducer;
