import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import VideoPlayerModal from './components/VideoPlayerModal';
import LookbookModal from './components/LookbookModal';
import ClientPortalModal from './components/ClientPortalModal';

import SelectedWorksView from './views/SelectedWorksView';
import StoriesEditorialView from './views/StoriesEditorialView';
import FilmsMotionView from './views/FilmsMotionView';
import AboutPhilosophyView from './views/AboutPhilosophyView';
import JournalView from './views/JournalView';
import InquireBookView from './views/InquireBookView';

import { NavigationTab, PhotoVignette, CinemaFilm, LoveStory } from './types';
import { CURATED_VIGNETTES } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('selected-works');
  
  // Modals state
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [currentPhotosList, setCurrentPhotosList] = useState<PhotoVignette[]>(CURATED_VIGNETTES);
  const [activeFilm, setActiveFilm] = useState<CinemaFilm | null>(null);
  const [selectedStory, setSelectedStory] = useState<LoveStory | null>(null);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);

  const handleOpenPhoto = (photo: PhotoVignette, list?: PhotoVignette[]) => {
    const targetList = list || CURATED_VIGNETTES;
    setCurrentPhotosList(targetList);
    const index = targetList.findIndex((p) => p.id === photo.id);
    setSelectedPhotoIndex(index !== -1 ? index : 0);
  };

  const handleClosePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex < currentPhotosList.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const handleOpenFilm = (film: CinemaFilm) => {
    setActiveFilm(film);
  };

  const handleOpenStory = (story: LoveStory) => {
    setSelectedStory(story);
    setActiveTab('stories-and-editorial');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f4] text-[#1b1c19] selection:bg-[#6c5c3f] selection:text-white">
      {/* Fixed Luxury Navigation Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenPortal={() => setIsClientPortalOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="w-full pt-16 sm:pt-20 flex-1">
        {activeTab === 'selected-works' && (
          <SelectedWorksView
            onSelectTab={handleSelectTab}
            onOpenPhoto={handleOpenPhoto}
            onOpenFilm={handleOpenFilm}
            onOpenStory={handleOpenStory}
            onOpenLookbook={() => setIsLookbookOpen(true)}
          />
        )}

        {activeTab === 'stories-and-editorial' && (
          <StoriesEditorialView
            onOpenPhoto={handleOpenPhoto}
            selectedStory={selectedStory}
            onSelectStory={setSelectedStory}
            onNavigateInquire={() => handleSelectTab('inquire-and-book')}
          />
        )}

        {activeTab === 'films-and-motion' && (
          <FilmsMotionView
            onOpenFilm={handleOpenFilm}
            onNavigateInquire={() => handleSelectTab('inquire-and-book')}
          />
        )}

        {activeTab === 'about-and-philosophy' && (
          <AboutPhilosophyView
            onNavigateInquire={() => handleSelectTab('inquire-and-book')}
            onOpenLookbook={() => setIsLookbookOpen(true)}
          />
        )}

        {activeTab === 'journal' && (
          <JournalView
            onNavigateInquire={() => handleSelectTab('inquire-and-book')}
          />
        )}

        {activeTab === 'inquire-and-book' && (
          <InquireBookView
            onReturnHome={() => handleSelectTab('selected-works')}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenLookbook={() => setIsLookbookOpen(true)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        currentPhoto={selectedPhotoIndex !== null ? currentPhotosList[selectedPhotoIndex] : null}
        onClose={handleClosePhoto}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        hasNext={selectedPhotoIndex !== null && selectedPhotoIndex < currentPhotosList.length - 1}
        hasPrev={selectedPhotoIndex !== null && selectedPhotoIndex > 0}
      />

      {/* Cinematic Video Player Modal */}
      <VideoPlayerModal
        film={activeFilm}
        onClose={() => setActiveFilm(null)}
      />

      {/* 2025 Atelier Lookbook Modal */}
      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        onSelectTab={handleSelectTab}
      />

      {/* Private Client Portal Vault Modal */}
      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />
    </div>
  );
}
