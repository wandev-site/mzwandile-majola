import { WebHaptics } from 'web-haptics';

/**
 * Haptics utility to provide tactile feedback on mobile devices.
 * Wraps the 'web-haptics' library which handles both Android (Vibration API)
 * and iOS 17.4+ (hidden switch checkbox trick).
 */

const isBrowser = typeof window !== 'undefined';
let hapticsInstance: WebHaptics | null = null;

if (isBrowser) {
  try {
    hapticsInstance = new WebHaptics();
  } catch (e) {
    console.warn('Failed to initialize haptics:', e);
  }
}

export const haptics = {
  /**
   * Light tap feedback for standard button interactions.
   */
  tap: () => {
    if (!hapticsInstance) {
      console.log('[Haptics] No instance available');
      return;
    }
    try {
      console.log('[Haptics] Triggering tap (medium)');
      hapticsInstance.trigger('medium');
    } catch (e) {
      console.error('[Haptics] Tap error:', e);
    }
  },

  /**
   * Success feedback for positive actions (e.g., form submission).
   */
  success: () => {
    if (!hapticsInstance) {
      console.log('[Haptics] No instance available');
      return;
    }
    try {
      console.log('[Haptics] Triggering success');
      hapticsInstance.trigger('success');
    } catch (e) {
      console.error('[Haptics] Success error:', e);
    }
  },

  /**
   * Error feedback for negative actions or validation failures.
   */
  error: () => {
    if (!hapticsInstance) {
      console.log('[Haptics] No instance available');
      return;
    }
    try {
      console.log('[Haptics] Triggering error');
      hapticsInstance.trigger('error');
    } catch (e) {
      console.error('[Haptics] Error feedback error:', e);
    }
  },

  /**
   * More complex haptic pattern to feel more "premium" (dual-pulse).
   */
  punchyTap: () => {
    if (!hapticsInstance) return;
    try {
      console.log('[Haptics] Triggering punchyTap (dual-pulse)');
      hapticsInstance.trigger({
        pattern: [
          { duration: 15, intensity: 1 },
          { delay: 30, duration: 15, intensity: 0.7 }
        ]
      });
    } catch (e) {
      console.error('[Haptics] PunchyTap error:', e);
    }
  },

  /**
   * Medium/Heavy impact feedback.
   */
  heavy: () => {

    if (!hapticsInstance) return;
    try {
      console.log('[Haptics] Triggering heavy');
      hapticsInstance.trigger('heavy');
    } catch (e) {
      // No-op
    }
  }
};


