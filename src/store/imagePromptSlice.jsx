import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PromptPresets } from "@/services/prompt";

const initialState = {
  selectedPrompt: "Prompt All",
  idPresets: 1,
  idRations: 7,
  numberImages: 1,
  artisticLevel: 1,
  promptTexts: "",
  promptPresets: [],
  aspectRatios: [
    {
      id: 1,
      label: "2:1",
      width: 2048,
      height: 1024,
    },
    {
      id: 2,
      label: "16:9",
      width: 1820,
      height: 1024,
    },
    {
      id: 3,
      label: "3:2",
      width: 1536,
      height: 1024,
    },
    {
      id: 4,
      label: "14:10",
      width: 1434,
      height: 1024,
    },
    {
      id: 5,
      label: "4:3",
      width: 1365,
      height: 1024,
    },
    {
      id: 6,
      label: "5:4",
      width: 1280,
      height: 1024,
    },
    {
      id: 7,
      label: "1:1",
      width: 1024,
      height: 1024,
    },
    {
      id: 8,
      label: "4:5",
      width: 1024,
      height: 1280,
    },
    {
      id: 9,
      label: "3:4",
      width: 1024,
      height: 1365,
    },
    {
      id: 10,
      label: "10:14",
      width: 1024,
      height: 1434,
    },
    {
      id: 11,
      label: "2:3",
      width: 1024,
      height: 1536,
    },
    {
      id: 12,
      label: "6:10",
      width: 1024,
      height: 1707,
    },
    {
      id: 13,
      label: "9:16",
      width: 1024,
      height: 1820,
    },
    {
      id: 14,
      label: "1:2",
      width: 1024,
      height: 2048,
    },
  ],
};

export const generateImageFromPrompt = createAsyncThunk(
  "imagePrompt/generateImageFromPrompt",
  async ({}, { getState, rejectWithValue }) => {
    try {
      const {
        numberImages,
        artisticLevel,
        idPresets,
        idRations,
        promptTexts,
        promptPresets,
        aspectRatios,
      } = getState().imagePrompt;

      const matchedPreset = promptPresets
        .flatMap((p) => p.presets)
        .find((preset) => preset.id === idPresets);

      const matchedRation = aspectRatios.find(
        (ration) => ration.id === idRations
      );

      console.log(
        numberImages,
        artisticLevel,
        matchedPreset.description,
        promptTexts,
        matchedRation.label
      );

     
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchPromptPresets = createAsyncThunk(
  'imagePrompt/fetchPromptPresets',
  async (_, { rejectWithValue }) => {
    try {
      const res = await PromptPresets();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const imagePromptSlice = createSlice({
  name: "imagePrompt",
  initialState,
  reducers: {
    setPrompt: (state, action) => {
      state.selectedPrompt = action.payload;
    },
    setIdPresets: (state, action) => {
      state.idPresets = action.payload;
    },
    setIdRations: (state, action) => {
      state.idRations = action.payload;
    },
    setNumberImages: (state, action) => {
      state.numberImages = action.payload;
    },
    setArtisticLevel: (state, action) => {
      state.artisticLevel = action.payload;
    },
    setPromptTexts: (state, action) => {
      state.promptTexts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPromptPresets.fulfilled, (state, action) => {
      state.promptPresets = action.payload;
    });
  }
});

export const {
  setPrompt,
  setNumberImages,
  setIdRations,
  setIdPresets,
  setArtisticLevel,
  setPromptTexts,
} = imagePromptSlice.actions;
export default imagePromptSlice.reducer;
