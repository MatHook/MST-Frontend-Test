import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    currentSegment: 0,
    segments: [
      {
        id: 0,
        visible: false,
        title: "Архитектура",
        image: "/IllustrationMask - Архитектура.jpg",
        content:
          "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
      },
      {
        id: 1,
        visible: false,
        image: "/IllustrationMask - Благоустройство.jpg",
        title: "Благоустройство",
        content:
          "Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом",
      },
      {
        id: 2,
        visible: true,
        image: "/IllustrationMask - Безопасность.jpg",
        title: "Безопастность",
        content:
          "Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних",
      },
      {
        id: 3,
        image: "/IllustrationMask - Инженерия.jpg",
        visible: false,
        title: "Инженерия",
        content:
          "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
      },
      {
        id: 4,
        image: "/IllustrationMask - Инфраструктура.jpg",
        visible: false,
        title: "Инфраструктура",
        content:
          "Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса",
      },
      {
        id: 5,
        image: "/IllustrationMask - Транспортная доступность.jpg",
        visible: false,
        title: "Транспортная доступность",
        content:
          "Жилой комплекс «Первомайска» расположен в престижном Академическом районе",
      },
    ],
  },
  reducers: {
    setCurrentSegment(state, action) { 
      state.currentSegment = action.payload.id;
    },
    contentUpdated(state, action) {
      const { id, image, title, content } = action.payload;
      const existingContent = state.entities[id];
      if (existingContent) {
        existingContent.title = title;
        existingContent.content = content;
        existingContent.image = image;
      }
    },
  },
});

export const { setCurrentSegment, contentUpdated } = contentSlice.actions;

export default contentSlice.reducer;
