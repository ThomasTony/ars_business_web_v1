
import { useEffect, useState } from 'react'

type ExtraFeaturesProps = {
  searchOpen: boolean
  onSearchClose: () => void
}

export default function ExtraFeatures({
  searchOpen,
  onSearchClose,
}: ExtraFeaturesProps) {
  const [isRTL, setIsRTL] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        scrollHeight > 0
          ? Math.min((scrollTop / scrollHeight) * 100, 100)
          : 0

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'

    return () => {
      document.documentElement.dir = 'ltr'
    }
  }, [isRTL])

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Search Overlay */}
      <div
        className={`search-input-area ${searchOpen ? 'show' : ''}`}
        aria-hidden={!searchOpen}
      >
        <div className="container">
          <div className="search-input-inner">
            <form
              className="input-div"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="search-input autocomplete"
                type="text"
                placeholder="Search by keyword or #"
                autoFocus={searchOpen}
                tabIndex={searchOpen ? 0 : -1}
              />

              <button type="submit" aria-label="Search">
                <i className="far fa-search" />
              </button>
            </form>
          </div>
        </div>

        <button
          type="button"
          id="close"
          className="search-close-icon"
          onClick={onSearchClose}
          aria-label="Close search"
        >
          <i className="far fa-times" />
        </button>
      </div>

      {/* Background Overlay */}
      <div
        id="anywhere-home"
        className={searchOpen ? 'bgshow' : ''}
        onClick={onSearchClose}
      />

      {/* RTL / LTR Switcher */}
      <button
        type="button"
        className="rtl-ltr-switcher-btn"
        onClick={() => setIsRTL((prev) => !prev)}
      >
        <span className={!isRTL ? 'show' : ''}>
          View RTL
        </span>

        <span className={isRTL ? 'show' : ''}>
          View LTR
        </span>
      </button>

      {/* Scroll Progress / Back To Top */}
      <button
        type="button"
        className="progress-wrap"
        onClick={handleBackToTop}
        aria-label="Back to top"
        style={{
          '--scroll-progress': `${scrollProgress}%`,
        } as React.CSSProperties}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: 'stroke-dashoffset 10ms linear',
              strokeDasharray: '307.919, 307.919',
              strokeDashoffset:
                307.919 - (307.919 * scrollProgress) / 100,
            }}
          />
        </svg>

        <i className="fa-solid fa-arrow-up" />
      </button>
    </>
  )
}
