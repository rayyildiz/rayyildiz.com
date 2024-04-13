+++
date= "2024-03-19"
title= "CC2P - Convert CSV to Parquet Files"
slug= "cc2p"
+++

**(CC2P)** is a Rust-based project that converts CSV files in a selected folder into parquet format. This tool provides a simple and efficient way of handling and converting your CSV data files.

![](/gif/cc2p.gif)

## Installation & Usage

### Prerequisites

- Rust 1.74

### Building

Provide instructions on how to build the project, for example, installing the Rust compiler and necessary crates.

Here is how to install the `cc2p` directly from [crates.io](https://crates.io/crates/cc2p)

```shell
cargo install cc2p
```

### Running

Provide Instructions on how to run the scripts. For example, how to specify the input CSV file and the output Parquet file.

```shell
cc2p [OPTIONS] /path/to/csv/file.csv
```

Options:

- **delimiter**: delimiter char used in CSV files (default: `,`)
- **no-header**: whether to include the header in the CSV search column (default: `false`)
- **worker**: Number of worker threads to use for performing the task (default: `4`)

```shell
> cc2p --help

Convert a CSV to parquet file format

Usage: cc2p [OPTIONS] [PATH]

Arguments:
  [PATH]  Represents the folder path for CSV search [default: *.csv]

Options:
  -d, --delimiter <DELIMITER>  Represents the delimiter used in CSV files [default: ,]
  -n, --no-header              Represents whether to include the header in the CSV search column [default: false]
  -w, --worker <WORKER>        Number of worker threads to use for performing the task [default: 4]
  -h, --help                   Print help
  -V, --version                Print version
```

## Features

- Fast and reliable CSV to Parquet conversion.
- Multithreaded processing with the help of the [tokio](https://tokio.rs/) crate.
- Progress indication during conversion with the help of the [indicatif](https://docs.rs/indicatif) crate.

## Contributing

If you wish to contribute, please feel free to fork the repository, make your changes, and submit a pull request. All contributions are welcome!

## License

This project is licensed under MIT, see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: https://github.com/rayyildiz/cc2p