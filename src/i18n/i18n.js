import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: {
                paragraphHero1: "Posterfy transforms music passion into visual art.",
                paragraphHero2: "Create custom posters for your favorite albums using Spotify API.",
                anchorArt: "Art.",
                ArtTitle: "Watch the music\ntake shape",
                ArtParagraph: "It's simple, search for your favorite album, select it and let the art flow!",
                SearchPlaceholder: "Album name...",
                TryTrend: "Or, try trends",
                MadeBy: 'Made with 🎵 by',
                GoBack: 'Back',
                Loading: "Loading",
                LoadingText: "We are fetching the information.",
                Theme: "Theme",
                
                FAQ_HowItWorks_Question: "How does Posterfy work?",
                FAQ_HowItWorks_Answer: "To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",
                FAQ_Affiliation_Question: "Is Posterfy affiliated with Spotify?",
                FAQ_Affiliation_Answer: "No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",
                FAQ_AlbumSearch_Question: "What kind of albums can I search for on Posterfy?",
                FAQ_AlbumSearch_Answer: "Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",
                FAQ_SaveData_Question: "Does Posterfy save my created posters or search history?",
                FAQ_SaveData_Answer: "No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",
                FAQ_ReportIssue_Question: "How can I report an issue or suggest a feature to Posterfy?",
                FAQ_ReportIssue_Answer: "You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",
            
                EDITOR_ReleaseTitle: "Release date",
                EDITOR_RuntimeTitle: "Runtime",
                EDITOR_AlbumName: "Album name",
                EDITOR_ArtistName: "Artist name",
                EDITOR_TitleSize: "Title size",
                EDITOR_ArtistSize: "Artist size",
                EDITOR_TracksSize: "Tracks size",
                EDITOR_MarginTop: "Margin Top",
                EDITOR_MarginSide: "Margin side",
                EDITOR_MarginCover: "Margin cover",
                EDITOR_BackgroundColor: "Background color",
                EDITOR_TextColor: "Text color",
                EDITOR_Color: "Color",
                EDITOR_Fade: "Fade",
                EDITOR_FadeText: "Use fade",
                EDITOR_Tracklist: "Tracklist",
                EDITOR_TracklistText: "Show tracklist",
                EDITOR_Apply: "Apply",
                EDITOR_DownloadCover: "Cover",
                EDITOR_Download: "Poster",
                EDITOR_Cover: "Cover",
                EDITOR_Uncompressed: "Improved cover",
                EDITOR_UncompressedText: "Use improved cover",
                EDITOR_Font: "Custom font",
                EDITOR_DefaultFont: "Select",
                EDITOR_Shortcuts: "Shortcuts",
                EDITOR_InformationTab: "Informations",
                EDITOR_TracklistTab: "Tracklist",
            },
        },
        zh: {
            translation: {
                paragraphHero1: "Posterfy 将音乐热爱转化为视觉艺术。",
                paragraphHero2: "使用 Spotify API 为你喜欢的专辑生成专属海报。",
                anchorArt: "艺术。",
                ArtTitle: "见证音乐\n成形",
                ArtParagraph: "很简单，搜索你喜欢的专辑，选择它，让艺术自然流淌！",
                SearchPlaceholder: "专辑名……",
                TryTrend: "或者，试试热门趋势",
                MadeBy: "由 🎵 制作",
                GoBack: "返回",
                Loading: "加载中",
                LoadingText: "正在获取信息……",
                Theme: "主题",

                FAQ_HowItWorks_Question: "Posterfy 是如何工作的？",
                FAQ_HowItWorks_Answer: "Posterfy 使用 Spotify 的免费 API 获取数据和图片。当用户选择专辑后，Posterfy 会收集所有数据，通过 JavaScript 将其以视觉方式展示在画布元素（canvas）上，并生成渲染后的图片。",
                FAQ_Affiliation_Question: "Posterfy 与 Spotify 有关联吗？",
                FAQ_Affiliation_Answer: "没有，Posterfy 是一个独立项目，与 Spotify 没有任何关联或官方背书。",
                FAQ_AlbumSearch_Question: "在 Posterfy 上可以搜索哪些专辑？",
                FAQ_AlbumSearch_Answer: "Posterfy 可让你搜索 Spotify 数据库中所有专辑，因为它直接从 Spotify 的免费 API 获取数据。",
                FAQ_SaveData_Question: "Posterfy 会保存我生成的海报或搜索记录吗？",
                FAQ_SaveData_Answer: "不会，Posterfy 不会存储任何用户数据。每张海报都是临时生成，仅供下载。",
                FAQ_ReportIssue_Question: "如何反馈问题或建议功能？",
                FAQ_ReportIssue_Answer: "你可以通过页面底部的 GitHub 项目链接反馈问题或建议功能。",

                EDITOR_ReleaseTitle: "Release date",
                EDITOR_RuntimeTitle: "Runtime",
                EDITOR_AlbumName: "专辑名",
                EDITOR_ArtistName: "艺术家名",
                EDITOR_TitleSize: "标题大小",
                EDITOR_ArtistSize: "艺术家字号",
                EDITOR_TracksSize: "曲目字号",
                EDITOR_MarginTop: "上边距",
                EDITOR_MarginSide: "侧边距",
                EDITOR_MarginCover: "封面边距",
                EDITOR_BackgroundColor: "背景色",
                EDITOR_TextColor: "文字颜色",
                EDITOR_Color: "颜色",
                EDITOR_Fade: "渐变",
                EDITOR_FadeText: "使用渐变",
                EDITOR_Tracklist: "曲目列表",
                EDITOR_TracklistText: "显示曲目列表",
                EDITOR_Apply: "应用",
                EDITOR_DownloadCover: "封面",
                EDITOR_Download: "海报",
                EDITOR_Cover: "封面",
                EDITOR_Uncompressed: "高清封面",
                EDITOR_UncompressedText: "使用高清封面",
                EDITOR_Font: "自定义字体",
                EDITOR_DefaultFont: "选择",
                EDITOR_Shortcuts: "快捷键",
                EDITOR_InformationTab: "信息",
                EDITOR_TracklistTab: "曲目",
            },
        }
    },
    lng: "zh", // 默认语言设置为中文
    fallbackLng: "zh", // 兜底语言也为中文
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;