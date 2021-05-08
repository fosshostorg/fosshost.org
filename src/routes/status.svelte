<script>
  import ago from "s-ago";
  import { onMount } from "svelte";
  let data = [];
  let someDown = false;


  const getData = async () => {
    const fetchedData = await fetch(
      "https://updown.io/api/checks?api-key=ro-eKxJQmkEQSuVjyihGrDK"
    ).then((res) => res.json());

    data = fetchedData.filter((x) => x.enabled && x.published).map((x) => {
      if (!someDown && x.down) {someDown = true}
      return ({
        ...x,
        uptime: Math.floor(x.uptime *100) / 100,
        checked: ago(new Date(x.last_check_at)),
        link: `https://updown.io/${x.token}`
      })
    })
  };

  onMount(() => {
    getData();
  })
</script>

<div class="status">
  <article>
    <h1>Network Status</h1>
  </article>
  <div class="items">
    {#each data as item}
    <div class="item">
      <div class="up" class:down={item.down} class:someDown>
        {item.down ? "DOWN" : "UP"}
      </div>
      <div class="info">
        <div class="title">
          {item.alias || item.url}
        </div>
        <div class="sub">
          <span class="seen">Last check: {item.checked},</span>
          <a class="more" target="_blank" href={item.link}>See more</a>
        </div>
      </div>

      <div class="uptime">
        <div class="title">Uptime</div>
        <div class="percentage">{item.uptime}%</div>
      </div>
    </div>
    {/each}
  </div>
</div>

<style>
  .status {
    max-width: 800px;
    margin: 0rem auto 5rem;
    color: var(--fosshost-black);
  }

  @media (max-width: 1280px) {
    .status {
      margin: 0rem auto 3rem;
      padding: 0rem 1rem;
    }
  }

  @media (max-width: 500px) {
    .uptime {
      display: none;
    }
  }

  .item {
    border-bottom: 1px solid var(--fosshost-light-grey);
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    display: flex;
  }

  .item:last-child {
    border-bottom: none;
  }

  .item .up {
    font-weight: 900;
    flex-shrink: 0;
    color: #35e073;
    width: 45px;
    font-size: 16px;
  }

  .item .up.down {
    color: red;
  }

  .item .up.someDown {
    width: 60px;
  }

  .info {
    margin-right: auto;
  }

  .info .title {
    line-height: 1.2em;
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 22px;
  }

  .sub {
    font-weight: 300;
		font-size: 14px;
  }

  .seen {
    color: grey;
  }

  .more {
    text-decoration: none;
		color: red;
  }

  .more:hover {
    text-decoration: underline;
  }

  .uptime {
    margin-left: 1em;
		text-align: right;
  }

  .uptime .title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
  }

  .percentage {
    font-weight: 300;
    font-size: 26px;
  }

  /* .status {
	.items {
		.item {
			

			&:last-child {
				
			}

			.up {
				

				&.down {
					color: $red;
				}

				@at-root .status .items.someDown .item .up {
					width: 75px;
				}
			}

			.info {
				

				.title {
					
				}

				.sub {
					

					.seen {
						
					}

					.more {
						

						&:hover {
							
						}
					}
				}
			}

			.uptime {


				@include res(500) {
					display: none;
				}




			}
		}
	}
} */
</style>
