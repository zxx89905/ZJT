import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Anchor from './components/Anchor';
import SectionExplanation from './components/SectionExplanation';
import Searchbar from './components/Searchbar';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Loading from './components/Loading';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Faq from './components/Faq/Faq';
import PosterEditor from './components/PosterEditor/PosterEditor'

// 只保留A尺寸和2:3尺寸（2:3改为2700x4050）
const SIZE_PRESETS = [
  { key: "A尺寸", label: "A尺寸 (2480x3508)", width: 2480, height: 3508 },
  { key: "2-3", label: "2:3 (2700x4050)", width: 2700, height: 4050 },
];

const StyledSelect = styled.select`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1.5px solid #38ef7d;
  background: rgba(35, 32, 37, 0.15);
  color: #fff;
  font-size: 1em;
  font-family: inherit;
  margin-left: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  outline: none;
  transition: border 0.2s, background 0.2s;
  appearance: none;
  cursor: pointer;

  &:focus {
    border: 1.5px solid #38ef7d;
    background: rgba(35,32,37,0.25);
  }
  option {
    background: rgba(35, 32, 37, 0.85);
    color: #fff;
  }
`;

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [albumId, setAlbumId] = useState(null);

  // 只保A尺寸和2-3
  const [sizeKey, setSizeKey] = useState("A尺寸");
  const size = SIZE_PRESETS.find(s => s.key === sizeKey) || SIZE_PRESETS[0];

  function onClickAlbum(id){
    setAlbumId(id);
  }

  function handleClickBack(){
    setAlbumId(null);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const onSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Anchor text={t('anchorArt')} type={1} />
          <SectionExplanation title={t('ArtTitle')} paragraph={t('ArtParagraph')} />

          {/* 尺寸选择控件 */}
          {albumId ? (
            <>
              <div style={{ margin: '16px 0', textAlign: 'center' }}>
                <label style={{ fontWeight: 500, marginRight: 8, color: "#fff" }}>
                  选择海报尺寸:
                  <StyledSelect
                    value={sizeKey}
                    onChange={e => setSizeKey(e.target.value)}
                  >
                    {SIZE_PRESETS.map(preset => (
                      <option key={preset.key} value={preset.key}>{preset.label}</option>
                    ))}
                  </StyledSelect>
                </label>
              </div>
              <PosterEditor
                albumID={albumId}
                handleClickBack={handleClickBack}
                posterWidth={size.width}
                posterHeight={size.height}
                posterRatio={sizeKey}
              />
            </>
          ) : (
            <>
              <Searchbar onSearch={onSearch} />
              {query && <Grid query={query} onclick={onClickAlbum} />}

              <div style={{ display: query ? 'none' : 'block' }}>
                <Anchor text={t('TryTrend')} type={2}/>
                <Grid onclick={onClickAlbum} />
              </div>
            </>
          )}

          <Faq/>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;