import './App.css';
import Header  from './components/Header'
import Main from './pages/Main'
import MainContainer01 from './components/MainContainer01.jsx'
import MainContainer02 from './components/MainContainer02.jsx'
import ContainerVideo from './components/ContainerVideo.jsx'
import MainContainerTitleVideo from './components/MainContainerTitleVideo.jsx'
import ContainerTitleVideo01 from './components/ContainerTitleVideo01.jsx'
import ContainerTitleVideo02 from './components/ContainerTitleVideo02.jsx'
import ContTitleVideo02A from './components/ContTitleVideo02A.jsx'
import ContTitleVideo02B from './components/ContTitleVideo02B.jsx'
import ContainerLiker from './components/ContainerLiker.jsx'
import LikeContainer from './components/LikeContainer'
import LikeNumber from './components/LikeNumber'
import DislikeContainer from './components/DislikeContainer'
import DislikeNumber from './components/DislikeNumber'
import SharedContainer from './components/SharedContainer'
import SharedText from './components/SharedText'
import SaveContainer from './components/SaveContainer'
import SaveText from './components/SaveText'
import PointContainer from './components/PointContainer'
import MainContainerTitleChannel from './components/MainContainerTitleChannel'
import ContainerTitleChannel01 from './components/ContainerTitleChannel01'
import ContainerTitleChannel02 from './components/ContainerTitleChannel02'
import ContainerTitleChannel03 from './components/ContainerTitleChannel03'
import ContainerTitleChannel04 from './components/ContainerTitleChannel04'
import ContainerTitleChannel from './components/ContainerTitleChannel'
import ContainerTitleChannelA from './components/ContainerTitleChannelA'
import TitleChannel from './components/TitleChannel'
import CantSuscribers from './components/CantSucribers.jsx'
import ContainerTitleChannelB from './components/ContainerTitleChannelB.jsx'
import BtnSuscrito from './components/BtnSuscrito.jsx'
import CampaignIcon from './components/Campaign-Icon.jsx'
import DescriptionVideo from './components/DescriptionVideo';
import ShowMore from './components/ShowMore.jsx'
import CantComments from './components/CantComments.jsx'
import ContainerIconsComments from './components/ContainerIconsComments.jsx'
import ContainerImageComments from './components/ContainerImageComments.jsx'
import ContainImgInputComent from './components/ContainImgInputComent.jsx'
import ContainInputComments from './components/ContainInputComments.jsx'
import InputComments from './components/InputComments.jsx'
import ContainerButtonsComments from './components/ContainerButtonsComments.jsx'
import MainContainerComents from './components/MainContainerComents.jsx'


function App() {
  return (
      <div>
        <Header />
        <Main>
          <MainContainer01>
            <ContainerVideo />
            <MainContainerTitleVideo>
              <ContainerTitleVideo01/>
              <ContainerTitleVideo02>
                <ContTitleVideo02A/>
                <ContTitleVideo02B>
                  <ContainerLiker>
                    <LikeContainer>
                      <LikeNumber/>
                    </LikeContainer>
                    <DislikeContainer>
                      <DislikeNumber />
                    </DislikeContainer>
                  </ContainerLiker>
                    <SharedContainer>
                      <SharedText/>
                    </SharedContainer>
                    <SaveContainer>
                      <SaveText/>
                    </SaveContainer>
                    <PointContainer/>
                </ContTitleVideo02B>
              </ContainerTitleVideo02>
            </MainContainerTitleVideo>
            <MainContainerTitleChannel>
              <ContainerTitleChannel01/>
              <ContainerTitleChannel02>
                <ContainerTitleChannel>
                  <ContainerTitleChannelA>
                    <TitleChannel/>
                    <CantSuscribers/>
                  </ContainerTitleChannelA>
                  <ContainerTitleChannelB>
                    <BtnSuscrito/>
                    <CampaignIcon />
                  </ContainerTitleChannelB>
                </ContainerTitleChannel>
                <DescriptionVideo/>
                <ShowMore/>
              </ContainerTitleChannel02>
            </MainContainerTitleChannel>
              <ContainerTitleChannel03>
                <CantComments/>
                <ContainerIconsComments/>
              </ContainerTitleChannel03>
              <ContainerTitleChannel04>
                <ContainerImageComments>
                  <ContainImgInputComent/>
                  <ContainInputComments>
                    <InputComments/>
                    <ContainerButtonsComments/>
                  </ContainInputComments>
                </ContainerImageComments>
              </ContainerTitleChannel04>
              <MainContainerComents/>
          </MainContainer01>
          <MainContainer02>
          </MainContainer02>
        </Main>
      </div>
  );
}

export default App;
