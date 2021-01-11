import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GithubContext } from '../context/github/githubContext';
import { Loader } from '../components/Loader';
import { Repos } from '../components/Repos';

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);

    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Link to="/">Homepage</Link>

          <div className="card mb-4 mt-2">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3 text-center">
                  <img src={avatar_url} alt={name} style={{ width: '150px' }} />
                  <h2>{name}</h2>
                  {location ? <p>{location}</p> : null}
                  <a
                    href={html_url}
                    target="_blank"
                    className="btn btn-outline-primary"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
                <div className="col">
                  <div className="badge badge-primary mr-2">
                    Followers: {followers}
                  </div>
                  <div className="badge badge-success mr-2">
                    Following: {following}
                  </div>
                  <div className="badge badge-info mr-2">
                    Repositories: {public_repos}
                  </div>
                  <div className="badge badge-dark mr-2">
                    Gists: {public_gists}
                  </div>

                  {bio && (
                    <>
                      <h3>Bio</h3>
                      <p>{bio}</p>
                    </>
                  )}

                  <ul
                    className="mb-2"
                    style={{ listStyle: 'none', margin: 0, padding: 0 }}
                  >
                    {login && (
                      <li>
                        <strong>Username: </strong>
                        {login}
                      </li>
                    )}
                    {company && (
                      <li>
                        <strong>Company: </strong>
                        {company}
                      </li>
                    )}
                    {blog && (
                      <li>
                        <strong>Website: </strong>
                        {blog}
                      </li>
                    )}
                  </ul>
                  <Repos repos={repos} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
