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
    if (!hapticsInstance) return;
    try {
      hapticsInstance.trigger('selection');
    } catch (e) {
      // No-op on error
    }
  },

  /**
   * Success feedback for positive actions (e.g., form submission).
   */
  success: () => {
    if (!hapticsInstance) return;
    try {
      hapticsInstance.trigger('success');
    } catch (e) {
      // No-op on error
    }
  },

  /**
   * Error feedback for negative actions or validation failures.
   */
  error: () => {
    if (!hapticsInstance) return;
    try {
      hapticsInstance.trigger('error');
    } catch (e) {
      // No-op on error
    }
  },

  /**
   * Medium impact feedback.
   */
  medium: () => {
    if (!hapticsInstance) return;
    try {
      hapticsInstance.trigger('medium');
    } catch (e) {
      // No-op on error
    }
  }
};

