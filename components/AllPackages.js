import useSWR from 'swr'
import { gql } from 'graphql-request'
import { graphQLClient } from '../utils/graphql-client'
import LoadingSpinner from './LoadingSpinner'

import formatNumber from '../utils/formatNumber'

const fetcher = async (query) => await graphQLClient.request(query)

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
  )

  if (error) return <div>failed to load</div>
  return (
    <div className="min-w-full">
      <section className="text-gray-700 body-font">
        <div className="py-24 mx-auto max-w-7xlpx-5">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
              <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Browse all packages</h1>
              <div className="w-20 h-1 bg-indigo-500 rounded" />
            </div>
            <p className="w-full text-base leading-relaxed lg:w-1/2">
              {/*  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag. */}
            </p>
          </div>

          {data ? (
            <div className="flex flex-wrap -m-4 AllPackages">
              {data.allPackages.data.map((node) => (
                <div key={node._id} className="p-4 xl:w-1/3 md:w-1/2 SinglePackage">
                  <div className="rounded-lg bg-gray-900">
                    <div className="relative z-10 p-4 rounded-lg shadow-xl">
                      <div className="absolute inset-0 border-2 border-blue-700 rounded-lg pointer-events-none" />
                      <div className="absolute inset-x-0 top-0 transform translate-y-px ">
                        <div className="flex justify-center transform -translate-y-1/2">
                          <span className="inline-flex px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase bg-blue-700 rounded-full leading-5">
                            {node.language}
                          </span>
                        </div>
                      </div>
                      <img
                        className="object-cover object-center my-6 rounded mx-auto bg-white"
                        src={node.logo}
                        alt="content"
                      />
                      <div className="">
                        <h3 className="font-mono text-xs uppercase font-light text-gray-400">{node.category}</h3>
                        <h2 className="text-lg font-medium text-gray-100 mb-4s">{node.name}</h2>
                        <p className="tracking-tight text-gray-300 text-md leading-5">{node.excerpt}</p>

                        <div class="flex items-center flex-wrap mt-2">
                          <a
                            href={node.git_repo}
                            target="_blank"
                            rel="noreferrer noopener"
                            class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
                          >
                            Learn More
                            <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </a>
                          <span class="text-gray-300 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                            <svg
                              viewBox="0 0 20 20"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke="currentColor"
                              className="mr-1 w-4 h-4"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {formatNumber(node.git_stars)}
                          </span>

                          <span class="text-gray-300  inline-flex items-center leading-none text-sm">
                            <svg
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
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
  )
}

export default AllPackages
