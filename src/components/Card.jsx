import { motion } from 'framer-motion';

const Card = ({ card, isFlipped, onClick }) => {
  const cardStyle = {
    perspective: '1000px',
    width: '12rem',
    height: '20rem',
    cursor: 'pointer'
  };

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  };

  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  };

  const frontStyle = {
    ...faceStyle,
    backgroundColor: 'white',
    transform: 'rotateY(180deg)'
  };

  return (
    <motion.div
      style={cardStyle}
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div style={innerStyle}>
        {/* Card Back */}
        <div style={faceStyle}>
          <img 
            src="/cards/card-back.svg" 
            alt="Card Back"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
          />
        </div>
        
        {/* Card Front */}
        <div style={frontStyle}>
          <div style={{
            position: 'absolute',
            inset: 0,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom right, #f5f3ff, #ede9fe)'
          }}>
            <div style={{ transform: 'rotateY(180deg)' }}>
              <h3 style={{
                color: '#2e1065',
                fontSize: '1.125rem',
                fontWeight: 600,
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {card?.name || 'Unknown Card'}
              </h3>
              {card?.meaning && (
                <p style={{
                  color: '#7c3aed',
                  fontSize: '0.875rem',
                  textAlign: 'center'
                }}>
                  {card.meaning.upright}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
