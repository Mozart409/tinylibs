import useSWR from "swr";
import { gql } from "graphql-request";
import { graphQLClient } from "../utils/graphql-client";
import LoadingSpinner from "./LoadingSpinner";

const fetcher = async (query) => await graphQLClient.request(query);

function AllPackages() {
  const { data, error } = useSWR(
    gql`
      {
        allPackages {
          data {
            name
            category
            language
            git_repo
            git_stars
            excerpt
            logo
            size
            size_format
            size_compression
          }
        }
      }
    `,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  return (
    <div className="">
      <section className="text-gray-700 body-font">
        <div className="py-24 mx-auto max-w-7xlpx-5">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
              <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="w-20 h-1 bg-indigo-500 rounded"></div>
            </div>
            <p className="w-full text-base leading-relaxed lg:w-1/2">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>

          {data ? (
            <div className="flex flex-wrap -m-4">
              {data.allPackages.data.map((node) => (
                <div key={node._id} className="p-4 xl:w-1/4 md:w-1/2">
                  <div className="p-6 bg-gray-100 rounded-lg">
                    <img
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      src={node.logo}
                      alt="content"
                    />
                    <h3 className="font-mono text-xs tracking-wide uppercasefont-medium text-cool-gray-500">
                      {node.category}
                      &bull;
                      {node.language}
                      &bull;
                      {node.git_stars}
                    </h3>
                    <h2 className="text-lg font-medium text-gray-900 mb-4s">
                      {node.name}
                    </h2>
                    <p className="text-base leading-relaxed">{node.excerpt}</p>
                    <a
                      href={node.git_repo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Learn more.
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </section>
    </div>
  );
}

export default AllPackages;
