declare global {
  interface UnsplashResponse {
    total: number;
    total_pages: number;
    results: IUnsplashImageObj[];
  }

  interface IUnsplashImageObj {
    id: string;
    created_at: string;
    updated_at: string;
    promoted_at: null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: {
      small: string;
      small_s3: string;
      thumb: string;
      raw: string;
      regular: string;
      full: string;
    };
    links: {
      download: string;
      download_location: string;
      self: string;
      html: string;
    };
    categories: unknown[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: unknown[];
    sponsorship: null;
    topic_submissions: { 'food-drink': { status: string } };
    user: {
      total_photos: number;
      accepted_tos: boolean;
      social: {
        twitter_username: null;
        paypal_email: null;
        instagram_username: string;
        portfolio_url: null;
      };
      twitter_username: null;
      last_name: string;
      bio: string;
      total_likes: number;
      portfolio_url: null;
      profile_image: { small: string; large: string; medium: string };
      updated_at: string;
      for_hire: boolean;
      name: string;
      location: string;
      links: {
        followers: string;
        portfolio: string;
        following: string;
        self: string;
        html: string;
        photos: string;
        likes: string;
      };
      total_collections: number;
      id: string;
      first_name: string;
      instagram_username: string;
      username: string;
    };
    tags: unknown[];
  }
}

export {};
