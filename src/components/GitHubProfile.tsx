import { useState, useEffect } from "react";

interface GitHubProfileProps {
  username: string;
}

interface GitHubUser {
  name: string;
  avatar_url: string;
  gists_url: number;
  public_repos: number;
}

const GitHubProfile = ({ username }: GitHubProfileProps) => {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) throw new Error("User not found");
        return response.json();
      })
      .then((data: GitHubUser) => {
        setData(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>{data?.name}</>
  );
};

export default GitHubProfile;
